import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function MenuCategorias() {

  // <NavDropdown.Item><Link className='Links1' to='/Tienda/Categoria'>Categoria</Link></NavDropdown.Item>

  return (
    <div className='MenuCategorias'>
      <div className='flex'>
        <NavDropdown className='Menu' title="Categorias" >
          <div className='flex'>
            <div>
              {/* <NavDropdown drop='end' className='Menu' title="Categoria A" >
                
              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria B" >

              </NavDropdown> */}
              <NavDropdown drop='end' className='Menu' title="Categoria C" >
                <NavDropdown drop='end' className='Menu' title="Cristal de Roca" >
                  <NavDropdown.Item><Link className='Links1' to='/Tienda/Cristal de Roca 4mm'>Cristal de Roca 4 mm</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link className='Links1' to='/Tienda/Cristal de Roca 6mm'>Cristal de Roca 6 mm</Link></NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              {/* <NavDropdown drop='end' className='Menu' title="Categoria D" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria E" >

              </NavDropdown> */}
              <NavDropdown drop='end' className='Menu' title="Categoria F" >
                <NavDropdown.Item><Link className='Links1' to='/Tienda/Fimo'>Fimo</Link></NavDropdown.Item>
                <NavDropdown.Item><Link className='Links1' to='/Tienda/Fornituras'>Fornituras</Link></NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown drop='end' className='Menu' title="Categoria G" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria H" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria I" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria J" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria K" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria L" >

              </NavDropdown> */}
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
            </div>
            <div>
              {/* <NavDropdown drop='end' className='Menu' title="Categoria Ñ" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria O" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria P" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria Q" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria R" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria S" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria T" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria U" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria V" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria W" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria X" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria Y" >

              </NavDropdown> */}
              {/* <NavDropdown drop='end' className='Menu' title="Categoria Z" >

              </NavDropdown> */}
            </div>
          </div>
        </NavDropdown>
      </div>
    </div>
  );
}

export default MenuCategorias;