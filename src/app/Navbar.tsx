import React, { FunctionComponent, MouseEvent, MutableRefObject, useRef, useState } from 'react';
import { createStyles, Theme, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Discord from 'mdi-material-ui/Discord';
import Gitlab from 'mdi-material-ui/Gitlab';
import Steam from 'mdi-material-ui/Steam';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        navIcon: {
            display: 'flex',
        },
        navbarBackground: {
            background: 'transparent',
            boxShadow: 'none',
        },
        typography: {
            padding: theme.spacing(2),
        },
        discordTextarea: {
            position: 'absolute',
            left: '-9999px',
        },
    }),
);

export const copyHandler = (textAreaRef: MutableRefObject<HTMLTextAreaElement | null>): Promise<void> => {
    if (textAreaRef.current !== null) {
        textAreaRef.current.select();
        return navigator.clipboard.writeText('lesser#5725');
    }
    return Promise.reject();
};

const Navbar: FunctionComponent = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const discordIdRef = useRef<HTMLTextAreaElement | null>(null);
    const closeHandler = (): void => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'disc-popover' : undefined;
    return (
        <AppBar className={classes.navbarBackground}>
            <Toolbar>
                <Typography variant="h6">Ilman</Typography>
                <div className={classes.grow} />
                <IconButton className={classes.navIcon} href="https://gitlab.com/ilmannafian04" target="_blank">
                    <Gitlab />
                </IconButton>
                <IconButton className={classes.navIcon} href="https://twitter.com/nafian_i" target="_blank">
                    <TwitterIcon />
                </IconButton>
                <IconButton className={classes.navIcon} href="https://www.instagram.com/ilman_n/" target="_blank">
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    className={classes.navIcon}
                    id="discordButton"
                    aria-describedby={id}
                    onClick={(event: MouseEvent<HTMLButtonElement>): void => {
                        const button = event.currentTarget;
                        copyHandler(discordIdRef).then(() => {
                            setAnchorEl(button);
                        });
                    }}
                >
                    <Discord />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={closeHandler}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>ID copied</Typography>
                </Popover>
                <IconButton
                    className={classes.navIcon}
                    href="https://steamcommunity.com/profiles/[U:1:121954861]"
                    target="_blank"
                >
                    <Steam />
                </IconButton>
                <form className={classes.discordTextarea}>
                    <textarea ref={discordIdRef} defaultValue="lesser#5725" />
                </form>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
