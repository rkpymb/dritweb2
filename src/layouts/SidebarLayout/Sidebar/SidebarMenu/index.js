import { useContext } from 'react';
import { useRouter } from 'next/router';
import MYS from 'Styles/mystyle.module.css'

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import NextLink from 'next/link';

import { SidebarContext } from 'src/contexts/SidebarContext';


import { LuHome, LuLayoutGrid, LuInspect, LuPencilRuler, LuClipboardCheck, LuLayoutList, LuAirplay, LuUserCircle2, LuShieldCheck, LuMonitorPlay } from "react-icons/lu";

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
    'transform',
    'opacity'
  ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <MenuWrapper>

        <List
          component="div"

        >
          <SubMenuWrapper>

            <List component="div">
              <div className={MYS.DbMenuTitle}>
                <span>Learning Dashboard</span>
              </div>
              <ListItem component="div">
                <NextLink href="/" passHref>
                  <Button
                    className={
                      currentRoute === '/' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuHome />}
                  >
                    Home Page
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/dashboards/main" passHref>
                  <Button
                    className={
                      currentRoute === '/dashboards/main' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuLayoutGrid />}
                  >
                    Dashboard
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/MyCourses/" passHref>
                  <Button
                    className={
                      currentRoute === '/MyCourses' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuAirplay />}
                  >
                    My Courses
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/MyTS/" passHref>
                  <Button
                    className={
                      currentRoute === '/MyTS' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuInspect />}
                  >
                    My Test Series
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/Videos/" passHref>
                  <Button
                    className={
                      currentRoute === '/StudyMaterials' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuMonitorPlay />}
                  >
                    Videos Classes
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/StudyMaterials/" passHref>
                  <Button
                    className={
                      currentRoute === '/StudyMaterials' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuPencilRuler />}
                  >
                    Study Materials
                  </Button>
                </NextLink>
              </ListItem>

              <ListItem component="div">
                <NextLink href="/Results/" passHref>
                  <Button
                    className={
                      currentRoute === '/Results' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuClipboardCheck />}
                  >
                    My Results
                  </Button>
                </NextLink>
              </ListItem>


            </List>
            <List>
              <div className={MYS.DbMenuTitle}>
                <span>Usefull Links</span>
              </div>
              <ListItem component="div">

                <NextLink href="/MyProfile/" passHref>
                  <Button
                    className={
                      currentRoute === '/MyProfile' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuUserCircle2 />}
                  >
                    My Profile
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">

                <a href="https://erp.driteducation.com/verification/studentdocsverification" target='_blank'>
                  <Button
                    className={
                      currentRoute === '/Certificate' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuShieldCheck />}
                  >
                    Certificate Verification
                  </Button>
                </a>
              </ListItem>
              <ListItem component="div">

                <NextLink href="/Orders/" passHref>
                  <Button
                    className={
                      currentRoute === '/Orders' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<LuLayoutList />}
                  >
                    Orders and Payments
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>


      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
