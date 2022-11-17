<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'surf6746_testgradin' );

/** Database username */
define( 'DB_USER', 'surf6746_testgradin' );

/** Database password */
define( 'DB_PASSWORD', 'surf6746_testgradin' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.q*vvA}%#hvz-`.kavxy171&4T71/E!8#E3:yC$zG70.$hl[2=n4zOBYQ!d}(G;c' );
define( 'SECURE_AUTH_KEY',  '22E<T,v*/j`zqf~NK<i@31Ke&gyH#LKBukEqSf>wF,zu2Ax4[?)nwL0lD(OF4/@P' );
define( 'LOGGED_IN_KEY',    'ERhdut:VM;Y*<UKN:copn~)R``pJg60.=KG9YJa!Te?(E93n.e>@%m).1{4{`W*$' );
define( 'NONCE_KEY',        'ic!_^~|3BX{`opFMa4ew=F7$^7[u+uG$Wz&B6(hCM-!<*/;Lc/~9 {$+=&.lK,c/' );
define( 'AUTH_SALT',        'k_1)9_(^t(c;uV1I)xHF,STKU0R6foacm_KSVKkm]:&L A FHps)qsK#Wu7Ea!$k' );
define( 'SECURE_AUTH_SALT', 'wN$|zNe(+Kr;nV25(^>;&[U2&NRmz3k%M,Ay:WRv6sIqII|fV0DJ_uQdq-n =A=/' );
define( 'LOGGED_IN_SALT',   'SZ_H59HZ_8!q>I8g&[osi,&vtLq5-d|~],Lw43iF#)n;kH%--4)t}<o[%c]/q+L_' );
define( 'NONCE_SALT',       'k8!}6?=uk5uULGzkW s25+,g&$D|#T!Jgtf!:bv%UQ@XP1r6i%J@:;Zd[[J|mp:|' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
