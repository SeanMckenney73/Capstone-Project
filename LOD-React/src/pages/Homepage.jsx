import ChampionIcon from "../components/ChampionIcon";
import { useNavigate, Outlet } from "react-router-dom";
import LODJumbotron from "../components/LODJumbotron";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import './Homepage.css'


export default function Homepage(){

    const champions = [
        { id: "Aatrox", name: "Aatrox"},
        { id: "Ahri", name: "Ahri"},
        { id: "Akali", name: "Akali"},
        { id: "Akshan", name: "Akshan"},
        { id: "Alistar", name: "Alistar"},
        { id: "Ambessa", name: "Ambessa"},
        { id: "Amumu", name: "Amumu"},
        { id: "Anivia", name: "Anivia"},
        { id: "Annie", name: "Annie"},
        { id: "Aphelios", name: "Aphelios"},
        { id: "Ashe", name: "Ashe"},
        { id: "AurelionSol", name: "Aurelion Sol"},
        { id: "Aurora", name: "Aurora"},
        { id: "Azir", name: "Azir"},
        { id: "Bard", name: "Bard"},
        { id: "Belveth", name: "Bel'Veth"},
        { id: "Blitzcrank", name: "Blitzcrank"},
        { id: "Brand", name: "Brand"},
        { id: "Braum", name: "Braum"},
        { id: "Briar", name: "Briar"},
        { id: "Caitlyn", name: "Caitlyn"},
        { id: "Camille", name: "Camille"},
        { id: "Cassiopeia", name: "Cassiopeia"},
        { id: "Chogath", name: "Cho'Gath"},
        { id: "Corki", name: "Corki"},
        { id: "Darius", name: "Darius"},
        { id: "Diana", name: "Diana"},
        { id: "Draven", name: "Draven"},
        { id: "Drmundo", name: "Dr. Mundo"},
        { id: "Ekko", name: "Ekko"},
        { id: "Elise", name: "Elise"},
        { id: "Evelynn", name: "Evelynn"},
        { id: "Ezreal", name: "Ezreal"},
        { id: "Fiddlesticks", name: "Fiddlesticks"},
        { id: "Fiora", name: "Fiora"},
        { id: "Fizz", name: "Fizz"},
        { id: "Galio", name: "Galio"},
        { id: "Gangplank", name: "Gangplank"},
        { id: "Garen", name: "Garen"},
        { id: "Gnar", name: "Gnar"},
        { id: "Gragas", name: "Gragas"},
        { id: "Graves", name: "Graves"},
        { id: "Gwen", name: "Gwen"},
        { id: "Hecarim", name: "Hecarim"},
        { id: "Heimerdinger", name: "Heimerdinger"},
        { id: "Hwei", name: "Hwei"},
        { id: "Illaoi", name: "Illaoi"},
        { id: "Irelia", name: "Irelia"},
        { id: "Ivern", name: "Ivern"},
        { id: "Janna", name: "Janna"},
        { id: "JarvanIV", name: "Jarvan IV"},
        { id: "Jax", name: "Jax"},
        { id: "Jayce", name: "Jayce"},
        { id: "Jhin", name: "Jhin"},
        { id: "Jinx", name: "Jinx"},
        { id: "Kaisa", name: "Kai'Sa"},
        { id: "Kalista", name: "Kalista"},
        { id: "Karma", name: "Karma"},
        { id: "Karthus", name: "Karthus"},
        { id: "Kassadin", name: "Kassadin"},
        { id: "Katarina", name: "Katarina"},
        { id: "Kayle", name: "Kayle"},
        { id: "Kayn", name: "Kayn"},
        { id: "Kennen", name: "Kennen"},
        { id: "Khazix", name: "Kha'Zix"},
        { id: "Kindred", name: "Kindred"},
        { id: "Kled", name: "Kled"},
        { id: "Kogmaw", name: "Kog'Maw"},
        { id: "Ksante", name: "K'Sante"},
        { id: "Leblanc", name: "LeBlanc"},
        { id: "Leesin", name: "Lee Sin"},
        { id: "Leona", name: "Leona"},
        { id: "Lillia", name: "Lillia"},
        { id: "Lissandra", name: "Lissandra"},
        { id: "Lucian", name: "Lucian"},
        { id: "Lulu", name: "Lulu"},
        { id: "Lux", name: "Lux"},
        { id: "Malphite", name: "Malphite"},
        { id: "Malzahar", name: "Malzahar"},
        { id: "Maokai", name: "Maokai"},
        { id: "Masteryi", name: "Master Yi"},
        { id: "Mel", name: "Mel"},
        { id: "Milio", name: "Milio"},
        { id: "Missfortune", name: "Miss Fortune"},
        { id: "Mordekaiser", name: "Mordekaiser"},
        { id: "Morgana", name: "Morgana"},
        { id: "Naafiri", name: "Naafiri"},
        { id: "Nami", name: "Nami"},
        { id: "Nasus", name: "Nasus"},
        { id: "Nautilus", name: "Nautilus"},
        { id: "Neeko", name: "Neeko"},
        { id: "Nidalee", name: "Nidalee"},
        { id: "Nilah", name: "Nilah"},
        { id: "Nocturne", name: "Nocturne"},
        { id: "Nunu", name: "Nunu & Willump"},
        { id: "Olaf", name: "Olaf"},
        { id: "Orianna", name: "Orianna"},
        { id: "Ornn", name: "Ornn"},
        { id: "Pantheon", name: "Pantheon"},
        { id: "Poppy", name: "Poppy"},
        { id: "Pike", name: "Pike"},
        { id: "Qiyana", name: "Qiyana"},
        { id: "Quinn", name: "Quinn"},
        { id: "Rakan", name: "Rammus"},
        { id: "Reksai", name: "Reksai"},
        { id: "Renata", name: "Renata Glasc"},
        { id: "Renekton", name: "Renekton"},
        { id: "Rengar", name: "Rengar"},
        { id: "Riven", name: "Riven"},
        { id: "Rumble", name: "Rumble"},
        { id: "Ryze", name: "Ryze"},
        { id: "Samira", name: "Samira"},
        { id: "Sejuani", name: "Sejuani"},
        { id: "Senna", name: "Senna"},
        { id: "Seraphine", name: "Seraphine"},
        { id: "Sett", name: "Sett"},
        { id: "Shaco", name: "Shaco"},
        { id: "Shen", name: "Shen"},
        { id: "Shyvana", name: "Shyvana"},
        { id: "Singed", name: "Singed"},
        { id: "Sion", name: "Sion"},
        { id: "Sivir", name: "Sivir"},
        { id: "Skarner", name: "Skarner"},
        { id: "Smolder", name: "Smolder"},
        { id: "Sona", name: "Sona"},
        { id: "Soraka", name: "Soraka"},
        { id: "Swain", name: "Swain"},
        { id: "Sylas", name: "Sylas"},
        { id: "Syndra", name: "Syndra"},
        { id: "Tahmkench", name: "Tahm Kench"},
        { id: "Taliyah", name: "Taliyah"},
        { id: "Talon", name: "Talon"},
        { id: "Taric", name: "Taric"},
        { id: "Teemo", name: "Teemo"},
        { id: "Thresh", name: "Thresh"},
        { id: "Tristana", name: "Tristana"},
        { id: "Trundle", name: "Trundle"},
        { id: "Tryndamere", name: "Tryndamere"},
        { id: "Twistedfate", name: "Twisted Fate"},
        { id: "Twitch", name: "Twitch"},
        { id: "Udyr", name: "Udyr"},
        { id: "Urgot", name: "Urgot"},
        { id: "Varus", name: "Varus"},
        { id: "Vayne", name: "Vayne"},
        { id: "Veigar", name: "Veigar"},
        { id: "Velkoz", name: "Vel'Koz"},
        { id: "Vex", name: "Vex"},
        { id: "Vi", name: "Vi"},
        { id: "Viego", name: "Viego"},
        { id: "Viktor", name: "Viktor"},
        { id: "Vladimir", name: "Vladimir"},
        { id: "Volibear", name: "Volibear"},
        { id: "Warwick", name: "Warwick"},
        { id: "Wukong", name: "Wukong"},
        { id: "Xayah", name: "Xayah"},
        { id: "Xerath", name: "Xerath"},
        { id: "Xinzhao", name: "Xin Zhao"},
        { id: "Yasuo", name: "Yasuo"},
        { id: "Yone", name: "Yone"},
        { id: "Yorick", name: "Yorick"},
        { id: "Yunara", name: "Yunara"},
        { id: "Yuumi", name: "Yuumi"},
        { id: "Zaheen", name: "Zaheen"},
        { id: "Zac", name: "Zac"},
        { id: "Zed", name: "Zed"},
        { id: "Zeri", name: "Zeri"},
        { id: "Ziggs", name: "Ziggs"},
        { id: "Zilean", name: "Zilean"},
        { id: "Zoe", name: "Zoe"},
        { id: "Zyra", name: "Zyra"}       
    ]
    

    return (
        <div className="Homepage min-vh-100">
            <NavBar/>
            <LODJumbotron/>

            <Container className="py-5 champion-grid-container">
                {/* Section title utilizing your custom styling hooks */}
                <h3 className="grid-header text-uppercase text-center mb-5">
                    Select Your Champion
                </h3>
                
                {/* Renders your complete champion array list side-by-side */}
                <Row className="g-4 justify-content-center">
                    {champions.map((champ) => (
                        <Col key={champ.id} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
                            <ChampionIcon
                                champion={champ.id}
                                championName={champ.name}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Footer/>
        </div>
    );
}