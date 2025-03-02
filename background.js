const colors =[  'bg-violet-400', 'bg-red-300','bg-lime-300', 'bg-green-500', 'bg-teal-500' ]

let color = 0;
document.getElementById('bg-color').addEventListener('click',function()
{
    document.body.classList.remove(...colors);
    document.body.classList.add(colors[color]);
    color = (color + 1) % colors.length;
}
)