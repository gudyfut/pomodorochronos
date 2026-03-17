import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { MainForms } from "../../components/MainForms";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
    
    return (
        <MainTemplate>   
              
            <Container>
                <Countdown />
            </Container> 

            <Container>
                <MainForms />
            </Container>

        </MainTemplate>
    );

}

