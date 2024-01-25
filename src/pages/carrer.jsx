import {
  Step,
  StepIcon,
  StepIndicator,
  StepStatus,
  Stepper,
  useSteps,
  Box,
  Progress
} from '@chakra-ui/react'

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
]

function Carrer() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const activeStepText = steps[activeStep].description

  const max = steps.length
  const progressPercent = 100

  return (
    <Box position='relative'>
      <Progress
        value={progressPercent}
        position='absolute'
        height='3px'
        width='full'
        top='10px'
      />
      <Stepper size='sm' index={activeStep} gap='100' zIndex={1} display={'flex'}>
        {steps.map((step, index) => (
          <Step key={index} gap='0'>
            <StepIndicator bg='white' borderColor={'red'}>
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default Carrer
