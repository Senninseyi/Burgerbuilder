import tw, {styled} from 'twin.macro';

export const Burger = styled.div`
    ${tw`flex flex-col items-center justify-center`}
    width: 100%;
    margin: auto;
    height: 300px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    @media(min-width: 1000px) and (min-height: 700px){
        width: 700px;
        height: 300px;
    }

    @media(min-width: 500px) and (min-height: 401px){
        width: 450px;
        height: 300px;
    }

    @media(min-width: 500px) and (min-height: 300px){
        width: 450px;
        height: 300px;
    }
`