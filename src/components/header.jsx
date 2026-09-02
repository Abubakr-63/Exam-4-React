import React, { useEffect, useReducer, useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  InputBase,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  TextField,
  Select,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import {
  Search,
  ChevronDown,
  User,
  ShoppingCart,
  Menu as MenuIcon,
  X,
  MapPin,
  LogOut,
  Package,
  Heart,
  Settings,
  Globe,
} from "lucide-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import logo from "../assets/Mask Group.png";
import { NavLink, useNavigate } from "react-router";
import { API, idProducts } from "../backend/api";
import axios from "axios";
import { reducer } from "../reducer/todo";

const CATEGORIES_KEYS = [
  {
    id: 1,
    element : "furniture",
    path : '/kidsfurniturecatalog'
  },
  {
    id : 2,
    element : "strollers",
    path : ''
  },
  {
    id : 3,
    element : "carSeats",
    path : ''
  },
  {
    id : 4,
    element :"clothing",
    path : ''
  },
  {
    id : 5,
    element : "feeding",
    path : ''
  },
  {
    id : 6,
    element : "hygiene",
    path : ''
  },
  {
    id : 7,
    element : "smartToys",
    path : ''
  },
];

const NAV_KEYS = [
  {
    id : 1,
    element : "promotions",
    path : '/sale'
  },
  {
    id : 2,
    element : "about",
    path : ''
  },
  {
    id : 3,
    element : "blog",
    path : '/blog'
  },
  {
    id : 4,
    element : "wholesale",
    path : '/frame32'
  },
  {
    id : 5,
    element : "returns",
    path : '',
  },
  {
    id : 6,
    element: "shipping",
    path : '/frame',
  },
  {
    id : 7,
    element: "contacts",
    path : '/contacts',
  },
];

export default function Header({count}) {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();
  const headerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [search, setSearch] = useState('')

  const [catalogOpen, setCatalogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES_KEYS[0]);
  const [loginOpen, setLoginOpen] = useState(false);
  const [accountAnchor, setAccountAnchor] = useState(null);
  const [authUser, setAuthUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('karapuz-auth')) || null;
    } catch {
      return null;
    }
  });
  const isAuthed = Boolean(authUser);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [data, dispatch] = useReducer(reducer, {data : []});
  const [products, setProducts] = useState([])

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    navigate(
      value.trim()
        ? `/searchpage?search=${encodeURIComponent(value.trim())}`
        : '/searchpage',
      { replace: true }
    );
  }

  const submitSearch = () => {
    const value = search.trim();
    if (value) {
      navigate(`/searchpage?search=${encodeURIComponent(value)}`);
    }
  }

  async function getProducts() {
    try {
      const {data} = await axios.get(idProducts);
      dispatch({type : 'fetch', payload : data})
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProducts()
  }, [count])

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const handleAccountClick = (event) => {
    if (isAuthed) {
      setAccountAnchor(event.currentTarget);
    } else {
      setLoginOpen(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!loginEmail.trim() || !loginPassword) {
      setLoginError(t('header.loginDialog.error'));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail.trim())) {
      setLoginError(t('header.loginDialog.invalidEmail'));
      return;
    }

    const user = { email: loginEmail.trim() };
    localStorage.setItem('karapuz-auth', JSON.stringify(user));
    setAuthUser(user);
    setLoginError('');
    setLoginEmail('');
    setLoginPassword('');
    setLoginOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('karapuz-auth');
    setAuthUser(null);
    setAccountAnchor(null);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box component="header" ref={headerRef} data-aos="fade-down">
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#FFFFFF",
          color: "#2E3A46",
          borderBottom: "1px solid #EEF1F3",
        }}
      >
        <Container
          maxWidth="xl"
          disableGutters={isMobile}
          sx={isMobile ? { bgcolor: "#FBF1EC" } : undefined}
        >
          <Toolbar
            disableGutters
            sx={{
              display: { xs: "none", md: "flex" },
              py: 1.5,
              gap: 2,
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <Box
            onClick={() => navigate('/')}
              component="img"
              src={logo}
              alt={t("header.logoAlt")}
              sx={{ height: 48, width: 48, flexShrink: 0 }}
            />

            <Button
              onClick={() => setCatalogOpen(true)}
              startIcon={<MenuIcon size={18} />}
              endIcon={<ChevronDown size={16} />}
              sx={{
                bgcolor: "#6BC1EA",
                color: "#fff",
                textTransform: "none",
                borderRadius: "10px",
                px: 2.5,
                py: 1,
                fontSize: 15,
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#57B4E0" },
              }}
            >
              {t("header.catalog")}
            </Button>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                bgcolor: "#F5F6F8",
                borderRadius: "10px",
                overflow: "hidden",
                minWidth: 220,
              }}
            >
              <Box sx={{ pl: 2, display: "flex", alignItems: "center", color: "#9AA4AD" }}>
                <Search size={18} />
              </Box>
              <InputBase
                value={search}
                onChange={handleSearch}
                onKeyDown={(e) => e.key === 'Enter' && submitSearch()}
                placeholder={t("header.searchPlaceholder")}
                sx={{ flex: 1, px: 1.5, py: 1, fontSize: 15 }}
              />
              <Button
                onClick={submitSearch}
                sx={{
                  bgcolor: "#6BC1EA",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: 0,
                  px: 3,
                  py: 1.25,
                  fontSize: 15,
                  "&:hover": { bgcolor: "#57B4E0" },
                }}
              >
                {t("header.searchButton")}
              </Button>
            </Box>

            <Select
              value={i18n.language?.startsWith("ru") ? "ru" : "en"}
              onChange={handleLanguageChange}
              variant="standard"
              disableUnderline
              IconComponent={ChevronDown}
              startAdornment={
                <Box sx={{ display: "flex", alignItems: "center", mr: 0.5, color: "#6B7885" }}>
                  <Globe size={16} />
                </Box>
              }
              sx={{
                fontSize: 14,
                color: "#2E3A46",
                minWidth: 90,
                "& .MuiSelect-select": { display: "flex", alignItems: "center", py: 0.5 },
              }}
            >
              <MenuItem value="en">{t("header.languages.en")}</MenuItem>
              <MenuItem value="ru">{t("header.languages.ru")}</MenuItem>
            </Select>

            <Box
              onClick={handleAccountClick}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                cursor: "pointer",
                color: "#3FA6DB",
                whiteSpace: "nowrap",
              }}
            >
              <User size={20} />
              <Typography sx={{ fontSize: 15 }}>
                {isAuthed ? t("header.account.title") : t("header.login")}
              </Typography>
            </Box>

            <Box
            onClick={() => navigate('/basket')}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                color: "#2E3A46",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              <div className="flex">
                <ShoppingCart size={20} />
              <p className="bg-[#7FC9F0] ml-3 mt-[-5px] px-1 py-0 rounded-2xl text-white text-[10px] absolute z-10">{data.data.length}</p>
                </div>
              <Typography sx={{ fontSize: 15 }}>{t("header.cart")}</Typography>
            </Box>
          </Toolbar>

          <Divider sx={{ display: { xs: "none", md: "block" }, borderColor: "#EEF1F3" }} />

          <Toolbar
            disableGutters
            variant="dense"
            sx={{
              display: { xs: "none", md: "flex" },
              py: 1.5,
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
              <Typography sx={{ fontSize: 13, color: "#8B95A1" }}>
                {t("header.tagline.line1")}
              </Typography>
              <Typography sx={{ fontSize: 13, color: "#8B95A1" }}>
                {t("header.tagline.line2")}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              {NAV_KEYS.map((elem) => (
                <NavLink
                  key={elem.id}
                  to={elem.path}
                  style={{ fontSize: 14, color: "#4A5561", textDecoration: "none" }}
                >
                  {t(`header.nav.${elem.element}`)}
                </NavLink>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#8B95A1" }}>
              <MapPin size={16} />
              <Typography sx={{ fontSize: 14 }}>{t("header.city")}:</Typography>
              <Typography sx={{ fontSize: 14, color: "#3FA6DB", cursor: "pointer" }}>
                {t("header.cityValue")}
              </Typography>
            </Box>
          </Toolbar>

          <Toolbar
            disableGutters
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1.5,
              px: 2,
              py: 1.5,
            }}
          >
            <IconButton
              onClick={() => setCatalogOpen(true)}
              sx={{ color: "#2E3A46", flexShrink: 0 }}
            >
              <MenuIcon size={24} />
            </IconButton>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: 0,
              }}
            >
              <Box
                
                component="img"
                src={logo}
                alt={t("header.logoAlt")}
                sx={{ height: 40, width: 40, flexShrink: 0 }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontSize: 12.5, color: "#2E3A46", lineHeight: 1.35 }}>
                  {t("header.tagline.line1")}
                </Typography>
                <Typography sx={{ fontSize: 12.5, color: "#2E3A46", lineHeight: 1.35 }}>
                  {t("header.tagline.line2")}
                </Typography>
              </Box>
            </Box>

            <IconButton sx={{ color: "#2E3A46", flexShrink: 0 }}>
              <ShoppingCart size={24} />
            </IconButton>
          </Toolbar>

          <Box
            sx={{
              display: { xs: "block", md: "none" },
              px: 2,
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#FFFFFF",
                border: "1px solid #E9DED6",
                borderRadius: "10px",
                px: 1.75,
                py: 1.1,
                gap: 1,
              }}
            >
              <Search size={18} color="#9AA4AD" />
              <InputBase
                value={search}
                onChange={handleSearch}
                onKeyDown={(e) => e.key === 'Enter' && submitSearch()}
                placeholder={t("header.searchPlaceholder")}
                sx={{ flex: 1, fontSize: 15 }}
              />
            </Box>
          </Box>
        </Container>
      </AppBar>

      <Dialog open={loginOpen} onClose={() => setLoginOpen(false)} maxWidth="xs" fullWidth>
        <DialogContent component="form" onSubmit={handleLogin} sx={{ position: "relative", p: 3 }}>
          <IconButton
            onClick={() => setLoginOpen(false)}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <X size={18} />
          </IconButton>
          <Typography onClick={() => {
            navigate('/registerform');
            setLoginOpen(false)
          }} sx={{ fontSize: 18, fontWeight: 600, mb: 2.5 }}>
            {t("header.loginDialog.title")}
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={t("header.loginDialog.email")}
            type="email"
            value={loginEmail}
            onChange={(event) => setLoginEmail(event.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            placeholder={t("header.loginDialog.password")}
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
            sx={{ mb: 2 }}
          />
          {loginError && (
            <Typography color="error" sx={{ fontSize: 13, mb: 1.5 }}>
              {loginError}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#6BC1EA",
              textTransform: "none",
              borderRadius: "8px",
              py: 1.25,
              mb: 1.5,
              "&:hover": { bgcolor: "#57B4E0" },
            }}
          >
            {t("header.loginDialog.submit")}
          </Button>
          <MuiLink onClick={() => {
            navigate('/resetpasswordfrom');
            setLoginOpen(false)
          }} underline="hover" sx={{ fontSize: 14, color: "#3FA6DB" }}>
            {t("header.loginDialog.forgotPassword")}
          </MuiLink>
        </DialogContent>
      </Dialog>

      <Menu
        anchorEl={accountAnchor}
        open={Boolean(accountAnchor)}
        onClose={() => setAccountAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box sx={{ px: 2, py: 1.5, display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              bgcolor: "#F0F2F4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9AA4AD",
            }}
          >
            <User size={20} />
          </Box>
          <Box>
            <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
              {t("header.account.name")}
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#9AA4AD" }}>
              {authUser?.email || t("header.account.email")}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <MenuItem onClick={() => setAccountAnchor(null)} sx={{ gap: 1.5, py: 1.25 }}>
          <Package size={18} />
          {t("header.account.orders")}
        </MenuItem>
        <MenuItem onClick={() => setAccountAnchor(null)} sx={{ gap: 1.5, py: 1.25 }}>
          <Heart size={18} />
          {t("header.account.favorites")}
        </MenuItem>
        <MenuItem onClick={() => setAccountAnchor(null)} sx={{ gap: 1.5, py: 1.25 }}>
          <Settings size={18} />
          {t("header.account.settings")}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ gap: 1.5, py: 1.25 }}>
          <LogOut size={18} />
          {t("header.account.logout")}
        </MenuItem>
      </Menu>

      <Drawer anchor="left" open={catalogOpen} onClose={() => setCatalogOpen(false)}>
        <Box sx={{ width: 300, height: "100%", bgcolor: "#3E5A6E" }}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              px: 2.5,
              py: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt={t("header.logoAlt")}
              sx={{ height: 40, width: 40 }}
            />
            <Button
              onClick={() => setCatalogOpen(false)}
              endIcon={<X size={16} />}
              sx={{
                bgcolor: "#6BC1EA",
                color: "#fff",
                textTransform: "none",
                borderRadius: "10px",
                px: 2,
                "&:hover": { bgcolor: "#57B4E0" },
              }}
            >
              {t("header.catalog")}
            </Button>
          </Box>

          <List sx={{ py: 1 }}>
            {CATEGORIES_KEYS.map((elem) => (
              <ListItemButton
                key={elem.id}
                selected={activeCategory === elem.id}
                onClick={() => {
                  setActiveCategory(elem.id);
                  navigate(`${elem.path}`)
                }}
                sx={{
                  px: 3,
                  py: 1.5,
                  color: "#FFFFFF",
                  "&.Mui-selected": {
                    bgcolor: "#FFFFFF",
                    color: "#2E3A46",
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: "#FFFFFF",
                  },
                }}
              >
                <ListItemText
                  primary={t(`header.catalogMenu.${elem.element}`)}
                  primaryTypographyProps={{ fontSize: 15 }}
                />
              </ListItemButton>
            ))}
          </List>

          <Divider sx={{ display: { xs: "block", md: "none" }, borderColor: "rgba(255,255,255,0.15)" }} />

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              gap: 2,
              px: 3,
              py: 2.5,
            }}
          >
            <Box
              onClick={() => {
                setCatalogOpen(false);
                setLoginOpen(true);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <User size={20} />
              <Typography sx={{ fontSize: 15 }}>
                {isAuthed ? t("header.account.title") : t("header.login")}
              </Typography>
            </Box>

            <Select
              value={i18n.language?.startsWith("ru") ? "ru" : "en"}
              onChange={handleLanguageChange}
              variant="standard"
              disableUnderline
              IconComponent={ChevronDown}
              startAdornment={
                <Box sx={{ display: "flex", alignItems: "center", mr: 0.5, color: "#FFFFFF" }}>
                  <Globe size={16} />
                </Box>
              }
              sx={{
                fontSize: 14,
                color: "#FFFFFF",
                width: 110,
                "& .MuiSelect-select": { display: "flex", alignItems: "center", py: 0.5 },
                "& .MuiSvgIcon-root": { color: "#FFFFFF" },
              }}
            >
              <MenuItem value="en">{t("header.languages.en")}</MenuItem>
              <MenuItem value="ru">{t("header.languages.ru")}</MenuItem>
            </Select>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}