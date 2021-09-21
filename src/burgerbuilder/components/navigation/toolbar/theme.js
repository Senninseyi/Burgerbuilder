import tw,{styled} from 'twin.macro';

export const Toolbar = styled.header`
    ${tw`w-full fixed top-0 left-0 bg-yellow-900 flex justify-between items-center box-border z-[100]`}
    height:56px;
    padding: 0 20px;
`

export const Nav = styled.nav`
    ${tw`hidden lg:flex md:flex h-full`}
`