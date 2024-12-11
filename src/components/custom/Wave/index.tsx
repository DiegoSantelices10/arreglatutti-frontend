const Wave = () => {
    return (
        <div
            style={{
                position: "relative",
                height: "10vh",
                backgroundColor: "#ffffff",  // Fondo blanco
                overflow: "hidden",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <path
                    fill="#002C53"  // Ondulación en color #002C53
                    fillOpacity="1"
                    d="M0,192L80,213.3C160,235,320,277,480,288C640,299,800,277,960,245.3C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                />
            </svg>
        </div>
    );
};

export default Wave;
