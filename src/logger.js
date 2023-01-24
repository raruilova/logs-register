import winston from "winston";

export const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

winston.addColors({
  error: "red",
  warn: "yellow",
  info: "cyan",
  debug: "green",
});
