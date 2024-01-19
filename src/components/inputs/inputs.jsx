import { InputGroup, Input, Stack, Textarea } from '@chakra-ui/react'

function Inputs() {
    return(
        <Stack spacing={1}>
            <InputGroup gap={1}>
                <Input 
                    type='name' 
                    placeholder='Nome:' 
                    style={{width: "400px", backgroundColor: 'transparent'}}
                />
                <Input 
                    type='email' 
                    placeholder='E-mail' 
                    style={{width: "400px", backgroundColor: 'transparent'}}
                />
            </InputGroup>
            <Textarea 
                placeholder='Digite sua mensagem aqui...' 
                style={{width: "100%", height: "160px", backgroundColor: 'transparent'}}
            />
        </Stack>
    )
}

export default Inputs