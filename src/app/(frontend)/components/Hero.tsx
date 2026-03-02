'use client'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper" style={{ position: 'relative', width: 1320, height: 685, borderRadius: '24px', overflow: 'hidden' }}>
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            zIndex: 1,
            borderRadius: '24px',
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/Cleanbold.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
