import tw,{styled} from 'twin.macro';

export const Modal = styled.div`
    ${tw`fixed z-[500] bg-white shadow-sm top-[30%] left-[15%] p-4`}
    width: 70%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    border: 1px solid #ccc;


    @media(min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`