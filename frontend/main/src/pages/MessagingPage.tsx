import Messaging from 'messaging/Messaging';

function MessagingPage() {
    return (
        <>
            <Messaging
                user="Andreea"
                messages={[
                    {
                        value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil commodi assumenda laborum. Animi, enim. Perspiciatis ipsa nesciunt ab eos rerum, aspernatur, hic quo facilis tempore, beatae sed sequi dicta in.',
                        type: 'end',
                    },
                    {
                        value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil commodi assumenda laborum. Animi, enim. Perspiciatis ipsa nesciunt ab eos rerum, aspernatur, hic quo facilis tempore, beatae sed sequi dicta in.',
                        type: 'start',
                    },
                ]}
                conversations={[
                    {
                        user: 'Andreea',
                        lastMessage:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, culpa tempora! Obcaecati ipsam ratione repellendus asperiores quae itaque distinctio! Alias corrupti temporibus aut sapiente odit dolor qui itaque ipsam quod?',
                        selected: false,
                    },
                    {
                        user: 'Andreea',
                        lastMessage:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, culpa tempora! Obcaecati ipsam ratione repellendus asperiores quae itaque distinctio! Alias corrupti temporibus aut sapiente odit dolor qui itaque ipsam quod?',
                        selected: true,
                    },
                ]}
            />
        </>
    );
}

export default MessagingPage;
