import tw from 'twin.macro'

export const BuildControl = tw.div`
    flex justify-between items-center mt-[5px] mx-0
`

export const Label = tw.label`
    p-2.5 font-bold w-20
`

export const Less = tw.button`
    bg-purple-500 text-white hover:bg-purple-700 py-1 px-3 mx-3 
    border-2 border-purple-900 disabled:bg-black
`

export const More = tw.button`
    bg-green-500 text-white hover:bg-green-700 py-1 px-3 my-3 border-2
    border-green-900 mx-3 active:bg-green-900
`