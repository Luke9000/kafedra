// import { Center, Stepper } from '@mantine/core';
// import { useState } from 'react';

// export default function Demo() {


//   // Allow the user to freely go back and forth between visited steps.
//   const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

//   return (
//     <>
//       <Stepper active={active} onStepClick={setActive} progressIcon mt={55} >
//         <Stepper.Step
//           withIcon = {false}
//           label="First step"
//           description="Create an account"
//           allowStepSelect={shouldAllowSelectStep(0)}
//         >
//           Step 1 content: Create an account
//         </Stepper.Step>
//         <Stepper.Step
//           label="Second step"
//           description="Verify email"
//           allowStepSelect={shouldAllowSelectStep(1)}
//         >
//           Step 2 content: Verify email
//         </Stepper.Step>
//         <Stepper.Step
//           label="Final step"
//           description="Get full access"
//           allowStepSelect={shouldAllowSelectStep(2)}
//         >
//           Step 3 content: Get full access
//         </Stepper.Step>

//         <Stepper.Step
//           label="Second step"
//           description="Verify email"
//           allowStepSelect={true}
//         >
//           <Center>
//           Создание кафедры Прикладной математики и Вычислительной техники. Начало базовой подготовки студентов в области вычислительной техники. 
//           </Center>
//         </Stepper.Step>

//         <Stepper.Completed>
//           Completed, click back button to get to previous step
//         </Stepper.Completed>
//       </Stepper>

//       {/* <Group justify="center" mt="xl">
//         <Button variant="default" onClick={() => handleStepChange(active - 1)}>
//           Back
//         </Button>
//         <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
//       </Group> */}
//     </>
//   );
// }