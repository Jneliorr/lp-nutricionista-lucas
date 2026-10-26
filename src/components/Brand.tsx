import type { Config } from '../config/business'
export default function Brand({ config }: { config: Config }) {
 return <span className="brand">{config.logo ? <img src={config.logo} alt="" width="44" height="44"/> : <svg viewBox="0 0 48 52" aria-hidden="true"><path d="M5 3h5v39h31v5H5zM18 3h5v26h20v5H18z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>}<span><strong>{config.name}</strong><small>{config.profession}</small></span></span>
}
