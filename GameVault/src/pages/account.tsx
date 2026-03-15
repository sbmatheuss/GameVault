import { useState } from 'react'
import '../styles/global.css'
import '../styles/Account.css'

type Tab = 'perfil' | 'conta' | 'suporte'

export function Account() {
  const [tab, setTab] = useState<Tab>('perfil')

  return (
    <div className="account-page">
      {/* Hero */}
      <section className="profile-hero">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar-placeholder">MS</div>
          <div className="profile-online-dot" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Marteus Silva</h1>
          <p className="profile-handle">@Gabi_gol</p>
          <div className="profile-stats">
            <div className="profile-stat">
              <span className="profile-stat-value">47</span>
              <span className="profile-stat-label">Jogos</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-value">12</span>
              <span className="profile-stat-label">Lista</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-value">$1.2k</span>
              <span className="profile-stat-label">Gasto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nav Tabs */}
      <nav className="profile-nav">
        {(['perfil', 'conta', 'suporte'] as Tab[]).map(t => (
          <button
            key={t}
            className={`profile-nav-btn ${tab === t ? 'active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t === 'perfil' ? 'Editar Perfil'
              : t === 'conta' ? 'Dados da Conta'
              : 'Suporte'}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="profile-content-card">
        {tab === 'perfil' && (
          <>
            <p className="content-section-title">Informações Pessoais</p>
            <div className="form-grid">
              <div className="form-field">
                <label>Nome</label>
                <input type="text" defaultValue="Marteus" />
              </div>
              <div className="form-field">
                <label>Sobrenome</label>
                <input type="text" defaultValue="Silva" />
              </div>
              <div className="form-field">
                <label>Usuário</label>
                <input type="text" defaultValue="Gabi_gol" />
              </div>
              <div className="form-field">
                <label>E-mail</label>
                <input type="email" defaultValue="marteus@email.com" />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-primary">Salvar Alterações</button>
              <button className="btn-ghost">Cancelar</button>
            </div>
          </>
        )}

        {tab === 'conta' && (
          <>
            <p className="content-section-title">Segurança da Conta</p>
            <div className="form-grid">
              <div className="form-field">
                <label>Senha Atual</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className="form-field">
                <label>Nova Senha</label>
                <input type="password" placeholder="••••••••" />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-primary">Atualizar Senha</button>
            </div>
          </>
        )}

        {tab === 'suporte' && (
          <>
            <p className="content-section-title">Central de Ajuda</p>
            <div className="form-grid">
              <div className="form-field" style={{ gridColumn: '1 / -1' }}>
                <label>Assunto</label>
                <input type="text" placeholder="Descreva seu problema..." />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-primary">Enviar Ticket</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}