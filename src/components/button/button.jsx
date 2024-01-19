// import {Box,  Button,  SlideFade, useDisclosure} from '@chakra-ui/react'

// function Button() {
//     const { isOpen, onToggle } = useDisclosure()

//     return (
//         <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem"}}> 
//             <Button borderRadius={"50%"} padding={"0px"} backgroundColor={"#840e0e"} onMouseEnter={onToggle} onMouseLeave={onToggle} _hover={{backgroundColor: 'red'}}>
//                 <BsFillTelephoneFill 
//                 fontSize={"15px"}
//                 style={{color: "white"}}
//                 />
//             </Button>
//             <SlideFade in={isOpen} offsetY='20px'>
//                 <Box
//                 p='0px'
//                 color='black'
//                 rounded='md'
//                 fontSize='13px'
//                 >
//                 <h5 style={{color: "light-gray", paddingLeft: "2px"}}>Me ligue</h5>
//                 <p>(31) 99266-1386</p>
//                 </Box>
//             </SlideFade>
//         </div>
//     )
// }

// export default Button;