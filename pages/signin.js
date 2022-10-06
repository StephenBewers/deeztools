import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const SignInPage = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (!(status === "loading") && !session) void signIn("deezer");
        if (session) window.close();
    }, [session, status]);

    // Just a placeholder component whilst the popup window redirects to Deezer authentication page
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 999,
                background: "white",
            }}
        ></div>
    );
};

SignInPage.layout = "signin";

export default SignInPage;