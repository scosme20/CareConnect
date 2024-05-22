import fs from 'fs';
import path from 'path';

class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    const logsDir = path.resolve('logs'); // Corrigido o caminho relativo
    if (!fs.existsSync(logsDir)) {
      try {
        fs.mkdirSync(logsDir, { recursive: true });
      } catch (error) {
        console.error('Failed to create logs directory:', error);
      }
    }

    this.logFilePath = path.join(logsDir, 'app.log');
    Logger.instance = this;
  }

  log(level, message) {
    const logMessage = `${new Date().toISOString()} - ${level}: ${message}\n`;
    fs.appendFile(this.logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Failed to write log:', err);
      }
    });
  }

  info(message) {
    this.log('INFO', message);
  }

  error(message) {
    this.log('ERROR', message);
  }
}

const logger = new Logger();
Object.freeze(logger);

export default logger;

