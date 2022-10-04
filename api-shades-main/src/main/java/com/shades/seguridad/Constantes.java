package com.shades.seguridad;

public class Constantes {
	
	// Spring Security
    public static final String LOGIN_URL = "/login";
    public static final String HEADER_AUTHORIZACION_KEY = "Authorization";
    public static final String TOKEN_BEARER_PREFIX = "Bearer ";

    // JWT
    public static final String ISSUER_INFO = "https://mexico.generation.org/";
    public static final String SUPER_SECRET_KEY = "bootcamp-cohorte-16";
    public static final long TOKEN_EXPIRATION_TIME = 864_000; // 10 day
	
}
