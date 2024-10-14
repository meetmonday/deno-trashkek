import { input, select } from 'npm:@inquirer/prompts'
const newModule = {
  title: '',
  basic: true
}

newModule.title = await input({ message: 'Enter module name' });
newModule.basic = await select({
  message: 'Module type',
  choices: [
    {
      value: true,
      name: 'Basic'
    },
    {
      value: false,
      name: 'Complex'
    }
  ]
})

console.log(newModule)