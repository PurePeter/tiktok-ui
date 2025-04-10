import myAlert from '~/myAlert';
function Button() {
    return (
        <button
            onClick={myAlert}
            style={{
                padding: '5px 15px',
                fontSize: 16,
            }}
        >
            Click me!
        </button>
    );
}

export default Button;
