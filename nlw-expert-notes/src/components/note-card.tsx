export function NoteCard () {
    return (
        <button className='text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 ring-slate-600 focus-visible: ring-2 focus-visible:ring-lime-400'>
          <span className='text-small font-medium text-slate-300'>
            Há 2 Dias
          </span>
          <p className='text-sm leading-6 text-slate-400' >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptatem, quia ratione maxime excepturi error officiis porro quam accusantium debitis cupiditate minus placeat dolores, possimus incidunt nemo? Sapiente, nam omnis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptatem, quia ratione maxime excepturi error officiis porro quam accusantium debitis cupiditate minus placeat dolores, possimus incidunt nemo? Sapiente, nam omnis!
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </button>
    )
}