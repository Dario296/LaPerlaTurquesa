import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function MenuCategorias() {

  // <NavDropdown drop='end' className='Menu' title="Categoria" >
  //   <NavDropdown.Item><Link className='Links1' to='/Tienda/Categoria'>Categoria</Link></NavDropdown.Item>
  // </NavDropdown>

  return (
    <div className='MenuCategorias'>
      <NavDropdown className='Menu' title="Categorias" >

        <NavDropdown drop='end' className='Menu' title="Categoria C" >
          <NavDropdown drop='end' className='Menu' title="Cristal de Roca" >
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Cristal de Roca 4mm'>Cristal de Roca 4 mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Cristal de Roca 6mm'>Cristal de Roca 6 mm</Link></NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>

        <NavDropdown drop='end' className='Menu' title="Categoria F" >
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Fimo'>Fimo</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Fornituras'>Fornituras</Link></NavDropdown.Item>
        </NavDropdown>

        <NavDropdown drop='end' className='Menu' title="Categoria M" >
          <NavDropdown drop='end' className='Menu' title="Madera" >
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 5mm'>Madera 5mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 8mm'>Madera 8mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 10mm'>Madera 10mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 12mm'>Madera 12mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 14mm'>Madera 14mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 16mm'>Madera 16mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 18mm'>Madera 18mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 20mm'>Madera 20mm</Link></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Mostacilla'>Mostacilla</Link></NavDropdown.Item>
        </NavDropdown>
        
      </NavDropdown>
    </div>
  );
}

export default MenuCategorias;