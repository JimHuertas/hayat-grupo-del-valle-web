interface MenuOption{
    title: string;
    url: string;
}

export const MenuOptions: MenuOption[] = [
    {title: 'INICIO', url: '/inicio' },
    {title: 'CONTÁCTO', url: '/contacto'},
    {title: 'NOSOTROS', url: '/nosotros'},
    {title: 'SERVICIOS', url: '/servicios'},
    {title: 'INFORMACIÓN', url: '/informacion' }
    // {title: 'RESERVA', url: '/reserva'}
]