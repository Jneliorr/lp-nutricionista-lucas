import { initialConfig } from '../config/business'
import type { Config } from '../config/business'
export default function Brand({ config }: { config: Config }) {
 const logo = config.logo || initialConfig.logo
 const original = logo === initialConfig.logo
 return <span className={`brand brand-image ${original ? 'brand-original' : 'brand-custom'}`}><span className="brand-logo-window"><img className="brand-logo" src={logo} alt={`${config.name} — ${original ? 'Nutrição Esportiva' : config.profession}`} width="709" height="686"/></span></span>
}
