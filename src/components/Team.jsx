import subhasPhoto from '../assets/team-subhas-pattnaik.jpg'
import krishnaPhoto from '../assets/team-krishna-mishra.jpg'

const TEAM = [
  {
    name: 'Subhas Pattnaik',
    role: 'FOUNDER & CEO',
    photo: subhasPhoto,
    bullets: [
      "27+ years of deep experience in India's agricultural and food sector.",
      'Former founder of FarmX Trading Pvt Ltd - scaled to $12M+ ARR in 4 years.',
      'Managed 55,000+ Metric Tonnes of fresh produce annually for Aditya Birla as GM.',
    ],
  },
  {
    name: 'Krishna Mishra',
    role: 'ADVISOR & INVESTOR',
    photo: krishnaPhoto,
    bullets: [
      '40+ years of leadership in agricultural finance, rural development, and public policy, including senior leadership at NABARD and recognition as an Ashoka Fellow.',
      'Helped mobilize over US$130 million across multiple ventures from sovereign funds, development finance institutions, corporates, and private investors to scale agricultural innovation and rural livelihoods.',
      'Founder of eKutir and Advisor to the FLO Agri Neo Fund, providing strategic guidance on agricultural finance, institutional partnerships, and investment strategy.',
    ],
  },
]

export default function Team() {
  return (
    <section className="team section" id="stakeholders">
      <div className="container team__inner">
        <div className="section-head reveal">
          <span className="eyebrow">Stakeholders</span>
          <h2>Built By Experts</h2>
        </div>

        <div className="team__grid reveal-stagger">
          {TEAM.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-card__photo">
                <img src={member.photo} alt={member.name} />
              </div>
              <p className="team-card__name">{member.name}</p>
              <p className="team-card__role">{member.role}</p>
              <ul className="team-card__bullets">
                {member.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="team__footnote">+ growing team of professionals and supply chain experts across multiple States.</p>
      </div>
    </section>
  )
}
