
const stack = ['React', 'React Native', 'Nextjs', 'Javascript', 'Typescript', 'Git', 'CI/CD', 'Redux', 'MobX', 'Tailwind', 'HTML', 'CSS', 'REST API', 'WebSocket', 'GraphQL',]

const TechnicalStack = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-3xl">Technical Stack</h2>
      <div className="flex flex-1 flex-row gap-y-4 gap-x-12 flex-wrap justify-between">
        {stack.map(el => {
          return <p key={el} className="rounded-2xl flex justify-center items-center py-3 px-8 bg-primary border-secondary border-[0.3px] text-[18px]">{el}</p>
        })}
      </div>
    </section>
  )
}

export default TechnicalStack