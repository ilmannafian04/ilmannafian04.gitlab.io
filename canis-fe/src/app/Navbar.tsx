import { createStyles, Theme, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Discord from 'mdi-material-ui/Discord';
import Gitlab from 'mdi-material-ui/Gitlab';
import Steam from 'mdi-material-ui/Steam';
import React, { FunctionComponent, MutableRefObject, ReactElement, useRef, useState } from 'react';
import { Twemoji } from 'react-emoji-render';

interface HideOnScrollProps {
    children: ReactElement;
}

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
        emojiSize: {
            fontSize: 30,
        },
    }),
);

const copyHandler = (buttonRef: MutableRefObject<HTMLButtonElement | null>, value: string): void => {
    const discordId = document.createElement('textarea');
    discordId.value = value;
    discordId.setAttribute('readonly', '');
    discordId.style.position = 'absolute';
    discordId.style.left = '-9999px';
    document.body.appendChild(discordId);
    discordId.select();
    document.body.removeChild(discordId);
    if (buttonRef.current) {
        buttonRef.current.focus();
    }
};

const HideOnScroll = (props: HideOnScrollProps): ReactElement => {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {props.children}
        </Slide>
    );
};

const Navbar: FunctionComponent = () => {
    const classes = useStyles();
    const [copySnakOpen, setCopySnackOpen] = useState(false);
    const discordButtonRef = useRef<HTMLButtonElement | null>(null);
    const copySnackCloseHandler = (event: React.SyntheticEvent | React.MouseEvent, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }
        setCopySnackOpen(false);
    };
    return (
        <HideOnScroll>
            <AppBar className={classes.navbarBackground}>
                <Toolbar>
                    <Twemoji text=":wolf:" onlyEmojiClassName={classes.emojiSize} />
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
                        ref={discordButtonRef}
                        onClick={(): void => {
                            copyHandler(discordButtonRef, 'lesser#5725');
                            setCopySnackOpen(true);
                        }}
                    >
                        <Discord />
                    </IconButton>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={copySnakOpen}
                        onClose={copySnackCloseHandler}
                        autoHideDuration={3000}
                        message="ID copied"
                    />
                    <IconButton
                        className={classes.navIcon}
                        href="https://steamcommunity.com/profiles/[U:1:121954861]"
                        target="_blank"
                    >
                        <Steam />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Navbar;
