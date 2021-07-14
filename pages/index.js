import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, AlurakutStyles, OrkutNostalgicIconSet } from '../src/lib/RenatakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import React from 'react';

function ProfileSideBar({user}) {
  return (
    <Box as="aside">
      <img src={`${user.image}`} style={{ borderRadius:'8px' }} />
      <hr />
      <p>
        <a className="boxLink">{user.name}</a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function InteractionForm() {

  return (
    <Box>
      <h2 className="subTitle"> O que você deseja fazer?</h2>
      <form onSubmit={function handleCriaComunidade(e) {
        e.preventDefault();
        const dadosDoForm = new FormData(e.target);
        const community = {
          id: new Date().toISOString(),
          title: dadosDoForm.get('title'),
          image: dadosDoForm.get('image'),
        }
        const updateCommunities = [...communities, community];
        setCommunities(updateCommunities)
      }}>
        <div>
          <input
            placeholder="Qual vai ser o nome da comunidade?"
            name="title"
            aria-label="Qual vai ser o nome da comunidade?"
            type="text"
            required
          />
        </div>
        <div>
          <input
            placeholder="Coloque uma URL para imagem de capa"
            name="image"
            aria-label="Coloque uma URL para imagem de capa"
            required
          />
        </div>
        <button>
          Criar comunidade
        </button>
      </form>
    </Box>
    
  )
}

export default function Home() {
  const user = {
    name: 'Tomoyo Daidouji',
    image: 'https://pbs.twimg.com/profile_images/1414686757384298506/S94hB61J_400x400.jpg'
  }
  const friends = [
    {id: '1',
    name: 'Usagi 🌙',
    image: 'https://i.pinimg.com/474x/57/2e/2d/572e2d8a547555fb44e1a12bf7a6d267.jpg'},
    {id: '2',
    name: 'Edward',
    image: 'https://i.pinimg.com/474x/59/53/47/5953471b873df0d94ecf44550aebaf13.jpg'},
    {id: '3',
    name: 'Rei Rino',
    image: 'https://pbs.twimg.com/profile_images/742725555657678849/hLUU4p_W_400x400.jpg'},
    {id: '4',
    name: 'Killua',
    image: 'https://a.wattpad.com/useravatar/duda_otaka.256.741256.jpg'},
    {id: '5',
    name: 'RamRem',
    image: 'https://ih1.redbubble.net/image.544651039.5013/flat,128x128,075,t.u3.jpg'},
    {id: '6',
    name: 'Inuyasha',
    image: 'https://pbs.twimg.com/profile_images/417808326584307712/meCbkbRU.jpeg'}
  ]
  const [communities, setCommunities]  = React.useState([{
  id: '12802378123789378912789789123896123', 
  title: 'Eu odeio acordar cedo',
  image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
}]);

  return (
    <>
      <AlurakutMenu user={user} />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar user={user} />
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">Bem vindo(a), Tomoyo</h1>
            <p>
              <b>Sorte de hoje: </b>
              A pessoa que lê a sua sorte não está se sentindo bem hoje. Esperamos que você esteja.
            </p>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle"> O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              const community = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              const updateCommunities = [...communities, community];
              setCommunities(updateCommunities)
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da comunidade?"
                  type="text"
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para imagem de capa"
                  name="image"
                  aria-label="Coloque uma URL para imagem de capa"
                  required
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>

          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({friends.length})</h2>
            <ul>
              {friends.map((friend) => {
                return (
                  <li key={friend.name}>
                    <a href="">
                    <img src={`${friend.image}`} />
                    <span>{friend.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({communities.length})
            </h2>
            <ul>
              {communities.map((community) => {
                return (
                  <li key={community.id}>
                    <a>
                      <img src={community.image} />
                      <span>{community.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )

}
