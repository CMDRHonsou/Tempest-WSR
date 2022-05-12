import styles from './styles';

export const medals = {
  DFC: 'dfc',
  IS_CR: 'is-cr',
  IS_CW: 'is-cw',
  IS_BR: 'is-br',
  IS_BW: 'is-bw',
  IS_SR: 'is-sr',
  IS_SW: 'is-sw',
  IS_GR: 'is-gr',
  IS_GW: 'is-gw',
  IS_PR: 'is-pr',
  IS_PW: 'is-pw',
  LOC: 'loc',
  LOS: 'los',
  MOC_BOC: 'moc-boc',
  MOC_SOC: 'moc-soc',
  MOC_GOC: 'moc-goc',
  MOC_POC: 'moc-poc',
  MOC_DOC: 'moc-doc',
  COB: 'cob',
  MOI: 'moi',
  IAR: 'iar',
  ISM: 'ism',
  IC: 'ic',
  PC: 'pc',
  BS: 'bs',
  SS: 'ss',
  GS: 'gs',
  OOR: 'oor',
  GOE: 'goe',
  MOH: 'moh',
  TUA: 'tua',
  MUA: 'mua',
};

export const medalImages = Object.values(medals).reduce((acc, medal) => ({
  ...acc,
  [medal]: () => (
    <img
      src={`https://tc.emperorshammer.org/images/report-assets/medals/${medal}.jpg`}
      alt={`Icon for ${medal}`}
      style={styles.medal}
    />
  ),
}), {});
