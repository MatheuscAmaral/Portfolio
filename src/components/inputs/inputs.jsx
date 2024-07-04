import { InputGroup, Input, Stack, Textarea } from '@chakra-ui/react'

function Inputs() {
    return(
        <Stack spacing={1} className='w-[350px] lg:w-[700px]'>
            <InputGroup gap={1}>
                <Input 
                    type='name' 
                    placeholder='Nome:'
                    className='w-full'
                    style={{backgroundColor: 'transparent'}}
                    />
                <Input 
                    type='email' 
                    placeholder='E-mail' 
                    className='w-full'
                    style={{backgroundColor: 'transparent'}}
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