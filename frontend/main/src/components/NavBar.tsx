import { Link, useNavigate } from 'react-router';

function NavBar() {
    const navigate = useNavigate();

    const handleLogoutModal = () => {
        const modal = document.getElementById(
            'my_modal_1'
        ) as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    const handleLogoutAction = () => {
        sessionStorage.clear();
        navigate('/auth');
    };

    return (
        <>
            <div className="navbar flex z-50 bg-base-100 border-base-300 border-b">
                <div className="flex-1">
                    <Link to={'/home'} className="btn btn-ghost text-xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        SOA
                    </Link>
                </div>
                <div className="flex-none gap-2 items-center">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="h-10 w-10 btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a onClick={handleLogoutModal}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-96">
                        <h3 className="font-bold text-lg">
                            Do you really want to logout ?
                        </h3>
                        <div className="modal-action">
                            <form method="dialog" className="flex gap-2">
                                <button
                                    className="btn w-20"
                                    onClick={handleLogoutAction}>
                                    Yes
                                </button>
                                <button className="btn w-20">No</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
}

export default NavBar;
