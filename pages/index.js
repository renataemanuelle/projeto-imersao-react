import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/RenatakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(user) {
  return (
    <Box>
      <img src={`${user.userImgSrc}`} style={{ borderRadius:'8px' }} />
    </Box>
  )
}

export default function Home() {
  const userImgSrc = 'https://pbs.twimg.com/profile_images/1414686757384298506/S94hB61J_400x400.jpg'
  const userFriends = [
    'https://i.pinimg.com/474x/57/2e/2d/572e2d8a547555fb44e1a12bf7a6d267.jpg',
    'https://i.pinimg.com/474x/59/53/47/5953471b873df0d94ecf44550aebaf13.jpg',
    'https://pbs.twimg.com/profile_images/742725555657678849/hLUU4p_W_400x400.jpg',
    'https://a.wattpad.com/useravatar/duda_otaka.256.741256.jpg',
    'https://ih1.redbubble.net/image.544651039.5013/flat,128x128,075,t.u3.jpg',
    'https://pbs.twimg.com/profile_images/417808326584307712/meCbkbRU.jpeg'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar userImgSrc={userImgSrc}/>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({userFriends.length})</h2>
            <ul>
              {userFriends.map((i) => {
                return (
                  <li>
                    <a href={`${i}`} key={i}>
                    <img src={`${i}`} />
                    <span>{}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          {/* <Box>Comunidades</Box>  */}
        </div>
      </MainGrid>
    </>
  )

}
