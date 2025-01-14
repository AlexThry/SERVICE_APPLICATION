import { HocuspocusProvider, TiptapCollabProvider } from '@hocuspocus/provider';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useCallback, useEffect, useState } from 'react';
import * as Y from 'yjs';
import { UserService } from '../services/Users.service';
import {
    RightDoubleSvg,
    LeftDoubleSvg,
    BulletSvg,
    CodeSvg,
    TableSvg,
    DownDoubleSvg,
    UpDoubleSvg,
    ColumnsSvg,
} from '../assets/SVGs';
import { colors } from '../utils/constants';
import { EditorService } from '../services/Editor.service';

const userService: UserService = new UserService();
const getRandomElement = (list: string | any[]) =>
    list[Math.floor(Math.random() * list.length)];

const getRandomColor = () => getRandomElement(colors);

const getInitialUser = () => {
    return {
        name: userService.getUser().username,
        color: getRandomColor(),
    };
};

interface EditorProps {
    ydoc: Y.Doc;
    provider: TiptapCollabProvider | HocuspocusProvider;
    documentId: string;
    setDocumentId: (documentId: string) => void;
    initialValue?: string;
}

const Editor: React.FC<EditorProps> = ({
    ydoc,
    provider,
    documentId,
    initialValue,
}) => {
    const editorService = new EditorService();
    const [status, setStatus] = useState('connecting');
    const [currentUser, setCurrentUser] = useState(getInitialUser);
    const [content, setContent] = useState(initialValue || '');

    const editor = useEditor({
        enableContentCheck: true,
        onContentError: ({ disableCollaboration }) => {
            disableCollaboration();
        },
        onCreate: ({ editor: currentEditor }) => {
            provider.on('synced', () => {
                if (currentEditor.isEmpty) {
                    currentEditor.commands.setContent(content);
                }
            });
        },
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
        },
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            Highlight,
            TaskList,
            TaskItem,
            Underline,
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            Collaboration.extend().configure({
                document: ydoc,
            }),
            CollaborationCursor.extend().configure({
                provider,
            }),
        ],
    });

    useEffect(() => {
        if (documentId) {
            editorService.getNote(documentId).then((content: any) => {
                editor?.commands.setContent(content.content);
                console.log('prout', content.content);
                
            });
        }
    }, [documentId]);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const handleKeyDown = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                console.log('document id: ', documentId);
                
                const updatedContent = editor?.getHTML();
                editorService.saveContent(documentId, updatedContent || '');
            }, 1000);
        };

        if (editor) {
            editor.view.dom.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            if (editor) {
                editor.view.dom.removeEventListener('keydown', handleKeyDown);
            }
            clearTimeout(timer);
        };
    }, [editor]);

    useEffect(() => {
        const statusHandler = (event: { connected: boolean }) => {
            setStatus(event.connected ? 'connected' : 'disconnected');
        };

        provider.on('status', statusHandler);

        return () => {
            provider.off('status', statusHandler);
        };
    }, [provider]);

    useEffect(() => {
        if (editor && currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            editor.chain().focus().updateUser(currentUser).run();
        }
    }, [editor, currentUser]);

    const setName = useCallback(() => {
        const name = (window.prompt('Name', currentUser.name) || '')
            .trim()
            .substring(0, 32);

        if (name) {
            return setCurrentUser({ ...currentUser, name });
        }
    }, [currentUser]);

    if (!editor) {
        return null;
    }

    return (
        <div className="column-half">
            <div className="control-group flex flex-col w-full sticky top-0 bg-base-100 z-30 shadow-sm">
                <h1 className="text-2xl font-bold m-2">Title</h1>
                <div
                    className="collab-status-group"
                    data-state={status === 'connected' ? 'online' : 'offline'}>
                    <label>
                        {status === 'connected'
                            ? `${
                                  editor.storage.collaborationCursor.users
                                      .length
                              } user${
                                  editor.storage.collaborationCursor.users
                                      .length === 1
                                      ? ''
                                      : 's'
                              } online in ${documentId}`
                            : 'offline'}
                    </label>
                    <button
                        style={
                            {
                                '--color': currentUser.color,
                            } as React.CSSProperties
                        }
                        onClick={setName}>
                        ✎ {currentUser.name}
                    </button>
                </div>
                <div className="button-group flex flex-wrap gap-2 m-2">
                    <div className="join">
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                            className={`btn join-item font-bold min-h-8 h-8 ${
                                editor.isActive('bold') ? 'bg-blue-500' : ''
                            }`}>
                            B
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                            className={`btn join-item italic min-h-8 h-8 ${
                                editor.isActive('italic') ? 'bg-blue-500' : ''
                            }`}>
                            I
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleUnderline().run()
                            }
                            className={`btn join-item underline min-h-8 h-8 ${
                                editor.isActive('underline')
                                    ? 'bg-blue-500'
                                    : ''
                            }`}>
                            U
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleStrike().run()
                            }
                            className={`btn join-item line-through min-h-8 h-8 ${
                                editor.isActive('strike') ? 'bg-blue-500' : ''
                            }`}>
                            S
                        </button>
                    </div>
                    <div className="join">
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 1 })
                                    .run()
                            }
                            className={`btn join-item min-h-8 h-8 ${
                                editor.isActive('heading', { level: 1 })
                                    ? 'bg-blue-500'
                                    : ''
                            }`}>
                            H1
                        </button>
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 2 })
                                    .run()
                            }
                            className={`btn join-item min-h-8 h-8 ${
                                editor.isActive('heading', { level: 2 })
                                    ? 'bg-blue-500'
                                    : ''
                            }`}>
                            H2
                        </button>
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 3 })
                                    .run()
                            }
                            className={`btn join-item min-h-8 h-8 ${
                                editor.isActive('heading', { level: 3 })
                                    ? 'bg-blue-500'
                                    : ''
                            }`}>
                            H3
                        </button>
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 4 })
                                    .run()
                            }
                            className={`btn join-item min-h-8 h-8 ${
                                editor.isActive('heading', { level: 4 })
                                    ? 'bg-blue-500'
                                    : ''
                            }`}>
                            H4
                        </button>
                    </div>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleBulletList().run()
                        }
                        className={`btn min-h-8 h-8 ${
                            editor.isActive('bulletList') ? 'bg-blue-500' : ''
                        }`}>
                        <BulletSvg />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleCode().run()
                        }
                        className={`btn min-h-8 h-8 ${
                            editor.isActive('code') ? 'bg-blue-500' : ''
                        }`}>
                        <CodeSvg />
                    </button>
                    <button
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .insertTable({
                                    rows: 3,
                                    cols: 3,
                                    withHeaderRow: true,
                                })
                                .run()
                        }
                        className="btn h-8 min-h-8">
                        <TableSvg />
                    </button>
                    <div className="join">
                        <button
                            onClick={() =>
                                editor.chain().focus().addColumnBefore().run()
                            }
                            className="btn h-8 min-h-8 join-item">
                            <LeftDoubleSvg />
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().addColumnAfter().run()
                            }
                            className="btn h-8 min-h-8 join-item">
                            <RightDoubleSvg />
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().addRowAfter().run()
                            }
                            className="btn h-8 min-h-8 join-item">
                            <DownDoubleSvg />
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().addRowBefore().run()
                            }
                            className="btn h-8 min-h-8 join-item">
                            <UpDoubleSvg />
                        </button>
                    </div>
                    <div className="join">
                        <button
                            onClick={() =>
                                editor.chain().focus().deleteColumn().run()
                            }
                            className="btn join-item h-8 min-h-8 after:w-8 after:bg-black after:h-[1px] after:rotate-45 after:absolute ">
                            <ColumnsSvg />
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().deleteRow().run()
                            }
                            className="btn join-item h-8 min-h-8 after:w-8 after:bg-black after:h-[1px] after:rotate-45 after:absolute">
                            <ColumnsSvg rotation={90} />
                        </button>
                    </div>
                </div>
            </div>

            <EditorContent
                editor={editor}
                className="main-group focus:outline-none z-0"
            />
        </div>
    );
};

export default Editor;
