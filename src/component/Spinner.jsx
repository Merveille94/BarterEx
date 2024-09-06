import { HashLoader } from "react-spinners";

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
};

const Spinner = ({ loading }) => {
    return (
        <HashLoader
            color='black'
            loading={loading}
            size={150}
            cssOverride={override}
        />
    );
}

export default Spinner;
