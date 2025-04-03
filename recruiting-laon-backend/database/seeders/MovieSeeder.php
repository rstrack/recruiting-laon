<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('movies')->insert(
            [
                [
                    'id' => 1,
                    'original_title' => 'Cleaner',
                    'title' => 'Cleaner',
                    'year' => 2025,
                    'duration' => 97,
                    'overview' => 'Ativistas criminosos fazem 300 reféns. Um extremista planeja assassinato em massa como mensagem para o mundo. Ex-soldada que virou limpadora de janelas tenta resgatar os reféns.',
                    'cast' => 'Daisy Ridley, Clive Owen, Taz Skylar e outros.',
                    'director' => 'Martin Campbell',
                    'imdb_rating' => 5,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg',
                    'trailer_url' => 'https://www.youtube.com/embed/4KIOLMv2ItI?si=g9do7rQsNYRk_R7V'
                ],
                [
                    'id' => 2,
                    'original_title' => 'Cosmic Chaos',
                    'title' => 'Cosmic Chaos',
                    'year' => 2023,
                    'duration' => 87,
                    'overview' => null,
                    'cast' => 'Ken Godmere, Caroline Dhavernas, Darren L. Hopwood e outros.',
                    'director' => 'Federico Haller',
                    'imdb_rating' => 4.5,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/mClzWv7gBqgXfjZXp49Enyoex1v.jpg',
                    'trailer_url' => null,
                ],
                [
                    'id' => 3,
                    'original_title' => 'Carjackers',
                    'title' => 'Mestres do Assalto',
                    'year' => 2025,
                    'duration' => 97,
                    'overview' => 'De dia, eles são invisíveis: manobristas, hostess e barmen em um hotel de luxo. À noite, são os Mestres do Assalto, um grupo de motoristas talentosos que persegue e rouba clientes ricos na estrada. Ao planejarem o maior dos golpes, o diretor do hotel contrata um matador para pará-los a qualquer custo. Com o perigo se aproximando, Nora, Zoe, Steve e Prestance conseguirão realizar o serviço?',
                    'cast' => 'Zoé Marchal, Franck Gastambide, Bosh e outros.',
                    'director' => 'Kamel Guemra',
                    'imdb_rating' => 4.7,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9AzMgk6HVqwqTmAbzAuD8fVmnOd.jpg',
                    'trailer_url' => 'https://www.youtube.com/embed/slSwwaZ0KoM?si=l4zkI35vY_4HSDVW'
                ],
                [
                    'id' => 4,
                    'original_title' => 'Captain America: Brave New World',
                    'title' => 'Capitão América: Admirável Mundo Novo',
                    'year' => 2025,
                    'duration' => 118,
                    'overview' => 'Após se encontrar com o recém-eleito presidente dos EUA, Thaddeus Ross, Sam se vê no meio de um incidente internacional. Ele deve descobrir o motivo por trás de uma conspiração global nefasta antes que o verdadeiro gênio faça o mundo inteiro ser dominado pelo vermelho.',
                    'cast' => 'Anthony Mackie, Harrison Ford, Danny Ramirez e outros.',
                    'director' => 'Julius Onah',
                    'imdb_rating' => 5.9,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/viUricKwbToOJIRrKOUr0Bg9rOY.jpg',
                    'trailer_url' => 'https://www.youtube.com/embed/1pHDWnXmK7Y?si=UjkvuFD3fy6dVIq_'
                ],
                [
                    'id' => 5,
                    'original_title' => 'The Codes of War',
                    'title' => 'The Codes of War',
                    'year' => 2025,
                    'duration' => 92,
                    'overview' => 'Fuzileiros navais enfrentam um caminhão-bomba suicida em seis segundos, um médico da Marinha luta contra sua humanidade e um soldado da Segunda Guerra Mundial questiona seus princípios após ser separado de sua unidade.',
                    'cast' =>  'Michael Grant, Noah Gray-Cabey e outros.',
                    'director' => 'Paul Anderson',
                    'imdb_rating' => 5.3,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oXeiQAfRK90pxxhP5iKPXQqAIN1.jpg',
                    'trailer_url' => null,
                ],
                [
                    'id' => 6,
                    'original_title' => 'De lydløse',
                    'title' => 'The Quiet Ones',
                    'year' => 2024,
                    'duration' => 110,
                    'overview' => 'Em 2008, um grupo de homens da Dinamarca e de toda a Europa realiza o maior assalto de todos os tempos em solo dinamarquês. Kasper, um boxeador com poucas chances na vida, recebe a oportunidade de planejar o roubo de seus iniciadores estrangeiros.',
                    'cast' => 'Gustav Dyekjær Giese, Reda Kateb, Amanda Collin e outros.',
                    'director' => 'Frederik Louis Hviid',
                    'imdb_rating' => 6.3,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/63tvLp9pYygvAaqWpikjTq9FHy7.jpg',
                    'trailer_url' => 'https://www.youtube.com/embed/cmkmWsC6iTs?si=EQ3lV-ur64CzH3Cw'
                ],
                [
                    'id' => 7,
                    'original_title' => 'A Working Man',
                    'title' => 'Resgate Implacável',
                    'year' => 2025,
                    'duration' => 116,
                    'overview' => 'Ele quer viver uma vida simples e ser um bom pai para sua filha. Mas quando a filha adolescente de seu chefe, Jenny, desaparece, ele é chamado para reempregar as habilidades que o tornaram uma figura lendária nas operações secretas.',
                    'cast' => 'Jason Statham, Jason Flemyng, Merab Ninidze e outros.',
                    'director' => 'David Ayer',
                    'imdb_rating' => 6.9,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/iT6yYCAuMQwm1PV4nByrsrsIOhG.jpg',
                    'trailer_url' => 'https://www.youtube.com/embed/zTbgNC42Ops?si=0PgYSaR0yL4pNBST'
                ],
                [
                    'id' => 8,
                    'original_title' => 'Popeye the Slayer Man',
                    'title' => 'Popeye: O Homem Assassino',
                    'year' => 2025,
                    'duration' => 88,
                    'overview' => 'Um curioso grupo de amigos entra sorrateiramente em uma fábrica abandonada de conservas de espinafre para filmar um documentário sobre a lenda do "Marinheiro", que supostamente assombra a fábrica e as docas locais',
                    'cast' => 'Jason Robert Stephens, Sarah Nicklin, Angela Relucio e outros.',
                    'director' => 'Robert Michael Ryan',
                    'imdb_rating' => 3.7,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/nVwu3mN7hr1yF467pGct3yQFM41.jpg',
                    'trailer_url' => 'https://www.youtube.com/embed/HLYK1Am9k8M?si=4YjBDinVyfHWnDVw'
                ],
                [
                    'id' => 9,
                    'original_title' => 'Snow White',
                    'title' => 'Branca de Neve',
                    'year' => 2025,
                    'duration' => 108,
                    'overview' => 'Quando a Rainha Má manda matarem sua enteada por inveja de sua beleza, Branca de Neve foge do reino. Ela percorre a floresta e acha uma casinha onde vivem sete anões amigáveis com quem passa viver. Porém, a moça ainda não está a salvo, já que a bruxa planeja dar um fim a sua vida com uma maçã envenenada.',
                    'cast' => 'Rachel Zegler, Emilia Faucher, Gal Gadot e outros.',
                    'director' => 'Marc Webb',
                    'imdb_rating' => 1.5,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/t0mabA2l3KE9Ai350BEKz61Ltor.jpg',
                    'trailer_url' => 'https://www.youtube.com/embed/iV46TJKL8cU?si=7vLcsifDpOVVRvqS'
                ],
                [
                    'id' => 10,
                    'original_title' => 'Mufasa: The Lion King',
                    'title' => 'Mufasa: O Rei Leão',
                    'year' => 2024,
                    'duration' => 118,
                    'overview' => 'Acompanhe a história épica da ascensão improvável do amado rei das Terras do Reino. Órfão e sozinho, Mufasa se perde até encontrar Taka, herdeiro de uma linhagem real. Isso dá início a uma jornada épica que testa os laços entre os dois enquanto enfrentam um inimigo mortal.',
                    'cast' => 'Aaron Pierre, Kelvin Harrison Jr., Tiffany Boone e outros.',
                    'director' => 'Barry Jenkins',
                    'imdb_rating' => 7.453,
                    'poster_url' => 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/iMVuv6Gz5fj7vZ51IjRF3AiW87y.jpg',
                    'trailer_url' => 'https://www.youtube.com/embed/o17MF9vnabg?si=5FqgpvXHGuyYyNeT'
                ],
            ]
        );
    }
}
