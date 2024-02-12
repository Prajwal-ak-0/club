import Image from "next/image";

export default function Home() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Image
        src="/background.gif"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        zIndex: 1,
      }}>
        
      </div>
    </div>
  );
}