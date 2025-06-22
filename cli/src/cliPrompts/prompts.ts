import * as p from '@clack/prompts'

export const prompts = {
  project_name: () =>
    p.text({
      message: 'What brand you rockin\'?',
      placeholder: 'project name',
      validate: (value) => {
        if (!value) {
          return 'Please enter a project name.'
        }

        return
      },
    }),
  time_to_boogie: () =>
    p.confirm({
      message: 'Are you ready to boogie?',
      initialValue: true,
    }),
} 