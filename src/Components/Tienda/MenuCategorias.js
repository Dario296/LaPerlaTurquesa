import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
function MenuCategorias() {
  return (
    <>
      <NavDropdown className='MenuCategorias' title="Categorias A-G" >
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Cristal de Roca'>Cristal de Roca</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Mostacillas'>Mostacillas</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Piedras'>Piedras</Link></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className='MenuCategorias' title="Categorias H-N" >
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Perlas'>Perlas</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Mostacillas'>Mostacillas</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Piedras'>Piedras</Link></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className='MenuCategorias' title="Categorias Ñ-T" >
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Perlas'>Perlas</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Mostacillas'>Mostacillas</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Piedras'>Piedras</Link></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className='MenuCategorias' title="Categorias U-Z" >
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Perlas'>Perlas</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Mostacillas'>Mostacillas</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Categorias' to='/Tienda/Piedras'>Piedras</Link></NavDropdown.Item>
      </NavDropdown>
    </>
    
  );
}

export default MenuCategorias;