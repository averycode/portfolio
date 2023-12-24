import './globals.css'

export default function Page() {
    return (
        <div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-6xl py-20'>Who am I</h1>
            <div className="avatar">
                <div className="w-60 rounded-xl">
                    <img src="pb.jpg" />
                </div>
            </div>
            <p className='mt-6 text-lg leading-8'>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
                Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
                fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
                lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
                dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
                eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                facilisis luctus, metus
            </p>
        </div>
    )
}