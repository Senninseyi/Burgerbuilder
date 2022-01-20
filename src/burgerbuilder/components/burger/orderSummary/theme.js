import tw, {styled} from "twin.macro";

export const SummaryContainer = styled.div`
    ${tw`flex flex-col text-left`}

    & ul {
        ${tw`flex my-1 lg:flex-row flex-col`}

        & li {
            ${tw`bg-yellow-500 p-2 mr-6 lg:my-0 my-2 text-white rounded-full`}
        }
    }
`

export const OrderTitle = styled.h3`
    ${tw`font-bold text-3xl`}
`

export const Description = styled.p`
    ${tw`font-normal my-2 text-lg`}
`

export const Checkout = styled.p`
    ${tw`font-medium my-2 text-lg`}
`