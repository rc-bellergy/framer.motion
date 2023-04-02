// Reference: https://hellostudio.framer.website/

import Head from 'next/head'
import styled from 'styled-components'

const ParallaxWrapper = styled.div`
  height: 500px; /* fallback for older browsers */
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-perspective: 300px;
  perspective: 300px;
`
const Group = styled.div`
  position: relative;
  height: 500px; /* fallback for older browsers */
  height: 100vh;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
`

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const LayerBase = styled(Layer)`
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 4;
`

const LayerFore = styled(Layer)`
  -webkit-transform: translateZ(90px) scale(0.7);
  transform: translateZ(90px) scale(0.7);
  z-index: 1;
`

const LayerBack = styled(Layer)`
  -webkit-transform: translateZ(-300px) scale(2.1);
  transform: translateZ(-300px) scale(2.1);
  z-index: 3;
`

const LayerDeep = styled(Layer)`
  -webkit-transform: translateZ(-600px) scale(3.1);
  transform: translateZ(-600px) scale(3.1);
  z-index: 2;
`

const Title = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  p {
    padding-top: 1rem;
  }
`
const BgImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`

const BgImage = styled.img`
  /* scale the background image to 100% screen width 
  and 120% screen height */
  min-width: 100%;
  min-height: 125vh;

  /* Center the image */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid;
`

export default function ParallaxPage () {
  return (
    <>
      <Head>
        <title>Parallax Page</title>
      </Head>
      <ParallaxWrapper>
        {/* Group 01 */}
        <Group className='z-[5]'>
          <LayerBase className='bg-stone-400'>
            <Title>
              <h1>Base Layer 01</h1>
              <p>A demo of CSS paralax effect page.</p>
            </Title>
          </LayerBase>
        </Group>

        {/* Group 02 */}
        <Group className='z-[4]'>
          <LayerBase>
            <Title className='text-white'>
              <h1>Base Layer 02</h1>
              <p>A background image.</p>
            </Title>
          </LayerBase>
          <LayerBack>
            <BgImageWrapper>
              <BgImage src='../images/03.webp' />
            </BgImageWrapper>
          </LayerBack>
        </Group>

        {/* Group 03 */}
        <Group className='z-[5]'>
          <LayerBase className='bg-slate-200'>
            <Title>
              <h1>Base Layer 03</h1>
              <p>A foreground image can flow on top.</p>
            </Title>
          </LayerBase>
          <LayerFore>
            <Title>
              <img src='../images/logo.svg' className='opacity-70' />
            </Title>
          </LayerFore>
        </Group>

        {/* Group 04 */}
        <Group className='z-[2]'>
          <LayerBase>
            <Title>
              <h1>Base Layer 04</h1>
            </Title>
          </LayerBase>
          <LayerBack>
            <Title>
              <p>
                I'm a description on the <b>Back Layer</b>
              </p>
              <p>
                The background image behind me is on the <b>Deep Layer</b>
              </p>
            </Title>
          </LayerBack>
          <LayerDeep>
            <BgImageWrapper>
              <BgImage src='../images/05.jpg' />
            </BgImageWrapper>
          </LayerDeep>
        </Group>

        {/* Group 05 */}
        <Group className='z-[3]'>
          <LayerBase className='bg-slate-200'>
            <Title>
              <h1>Base Layer 05</h1>
              <p>A foreground flowing object.</p>
            </Title>
          </LayerBase>
          <LayerFore>
            <Title>
              <img
                src='../images/firefox.svg'
                className='drop-shadow-[-20px_20px_10px_rgba(0,0,0,0.35)]'
              />
            </Title>
          </LayerFore>
        </Group>

        {/* Group 06 */}
        <Group className='z-[2]'>
          <LayerBase>
            <Title className='text-white'>
              <h1>Base Layer 06</h1>
            </Title>
          </LayerBase>
          <LayerBack>
            <BgImageWrapper>
              <BgImage src='../images/02.webp' />
            </BgImageWrapper>
          </LayerBack>
        </Group>

        {/* Group 07 */}
        <Group className='z-[3]'>
          <LayerBase className='bg-slate-800'>
            <Title className='text-white'>
              <h1>Base Layer 07</h1>
              <p>The End</p>
            </Title>
          </LayerBase>
        </Group>
      </ParallaxWrapper>
    </>
  )
}
