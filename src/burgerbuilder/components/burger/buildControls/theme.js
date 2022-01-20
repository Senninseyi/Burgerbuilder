import tw, {styled} from 'twin.macro'

export const BuildControls = styled.div`
    ${tw`w-full flex flex-col items-center justify-center m-auto bg-yellow-500`}
    box-shadow: 0 2px 1px #ccc;
    padding: 10px 0;
`

export const OrderBtn = tw.button`
    bg-blue-500 hover:bg-blue-700 px-3 py-2 cursor-pointer border-white border-2 text-white font-semibold
    disabled:bg-gray-700 disabled:cursor-not-allowed disabled:border-black active:bg-blue-700
`