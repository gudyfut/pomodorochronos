// Importing global and theme styles, theme antes para carregar as variaveis temas primeiro
import  './styles/theme.css';
import  './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/Countdown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';

import { PlayCircleIcon } from 'lucide-react';




export function App() {
    
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>
            
            <Container>
                <Countdown/>
            </Container> 

            <Container>
                <form className='form' action=''>
                    <div className='formRow'>
                        <DefaultInput
                            id="name" 
                            labelText="Task" 
                            type="text" 
                            defaultValue={'5'}
                        />
                    </div>

                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='formRow'>
                        <Cycles />
                    </div>

                    <div className='formRow'>
                        <DefaultButton icon={<PlayCircleIcon/>}/>
                    </div>
                </form>
            </Container>

            <Container>
                <Footer/>
            </Container>
        </>
    );

}

