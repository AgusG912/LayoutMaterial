import { useUiStore } from "../../../../hooks"

export const MobileSwitchToggleMenu = () => {

  const { toggleMobileMenu } = useUiStore();

    return (
    <>
        <div className={`bar bar--top ${ toggleMobileMenu ? 'headerMenuHamburgerOpen' : '' }`}></div>
        <div className={`bar bar--middle ${ toggleMobileMenu ? 'headerMenuHamburgerOpen' : '' }`}></div>
        <div className={`bar bar--bottom ${ toggleMobileMenu ? 'headerMenuHamburgerOpen' : '' }`}></div>

    </>
  )
}
