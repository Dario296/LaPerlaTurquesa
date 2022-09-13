import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function MenuCategorias() {
  return (
    <div className='MenuCategorias'>
      <div className='flex'>
        <NavDropdown className='Menu' title="Categorias A-G" >
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Cristal de Roca'>Cristal de Roca</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Fimo'>Fimo</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Fornituras'>Fornituras</Link></NavDropdown.Item>
          {/* <NavDropdown.Item><Link className='Links1' to='/Tienda/Categoria'>Categoria</Link></NavDropdown.Item> */}
        </NavDropdown>
        <NavDropdown className='Menu' title="Categorias H-N" >
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera'>Madera</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Mostacilla'>Mostacilla</Link></NavDropdown.Item>
          {/* <NavDropdown.Item><Link className='Links1' to='/Tienda/Categoria'>Categoria</Link></NavDropdown.Item> */}
        </NavDropdown>
      </div>
      <div className='flex'>
        <NavDropdown className='Menu' title="Categorias Ñ-T" >
          {/* <NavDropdown.Item><Link className='Links1' to='/Tienda/Categoria'>Categoria</Link></NavDropdown.Item> */}
        </NavDropdown>
        <NavDropdown className='Menu' title="Categorias U-Z" >
          {/* <NavDropdown.Item><Link className='Links1' to='/Tienda/Categoria'>Categoria</Link></NavDropdown.Item> */}
        </NavDropdown>
      </div>
    </div>
  );
}

export default MenuCategorias;