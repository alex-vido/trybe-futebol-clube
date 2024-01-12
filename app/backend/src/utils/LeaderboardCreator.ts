import IMatchCreate from '../Interfaces/ICreateMatch';

class LeaderboardCreator {
  static counterVictories(matches: IMatchCreate[], teamId: number): number {
    let victories = 0;
    const wonMatches = matches.filter((match) =>
      (match.homeTeamId === teamId && match.homeTeamGoals > match.awayTeamGoals)
      || (match.awayTeamId === teamId && match.awayTeamGoals > match.homeTeamGoals));
    wonMatches.forEach(() => {
      victories += 1;
    });
    return victories;
  }

  static counterLosses(matches: IMatchCreate[], teamId: number): number {
    let losses = 0;
    const lostMatches = matches.filter((match) =>
      (match.homeTeamId === teamId && match.homeTeamGoals < match.awayTeamGoals)
      || (match.awayTeamId === teamId && match.awayTeamGoals < match.homeTeamGoals));
    lostMatches.forEach(() => {
      losses += 1;
    });
    return losses;
  }

  static counterDraws(matches: IMatchCreate[], teamId: number): number {
    let draws = 0;
    const drawsMatches = matches.filter((match) =>
      (match.homeTeamId === teamId && match.homeTeamGoals === match.awayTeamGoals)
      || (match.awayTeamId === teamId && match.awayTeamGoals === match.homeTeamGoals));
    drawsMatches.forEach(() => {
      draws += 1;
    });
    return draws;
  }

  static counterPoints(matches: IMatchCreate[], teamId: number): number {
    const totalVictories = this.counterVictories(matches, teamId);
    const totalDraws = this.counterDraws(matches, teamId);
    const points = totalVictories * 3 + totalDraws * 1;
    return points;
  }

  static counterProGoals(matches: IMatchCreate[], teamId: number): number {
    let goalsFavor = 0;
    matches.forEach((match) => {
      if (match.homeTeamId === teamId) {
        goalsFavor += match.homeTeamGoals;
      }
      if (match.awayTeamId === teamId) {
        goalsFavor += match.awayTeamGoals;
      }
    });
    return goalsFavor;
  }

  static counterAgainstGols(matches: IMatchCreate[], teamId: number): number {
    let goalsOwn = 0;
    matches.forEach((match) => {
      if (match.homeTeamId === teamId) {
        goalsOwn += match.awayTeamGoals;
      }
      if (match.awayTeamId === teamId) {
        goalsOwn += match.homeTeamGoals;
      }
    });
    return goalsOwn;
  }

  static counterGames(matches: IMatchCreate[], teamId: number): number {
    let games = 0;
    matches.forEach((match) => {
      if (match.homeTeamId === teamId || match.awayTeamId === teamId) {
        games += 1;
      }
    });
    return games;
  }

  static counterGolsBalance(matches: IMatchCreate[], teamId: number): number {
    const goalsFavor = this.counterProGoals(matches, teamId);
    const goalsOwn = this.counterAgainstGols(matches, teamId);
    const golsBalance = goalsFavor - goalsOwn;
    return golsBalance;
  }

  static counterEfficiency(matches: IMatchCreate[], teamId: number): string {
    const totalPoints = this.counterPoints(matches, teamId);
    const totalGames = this.counterGames(matches, teamId);
    const efficiency = (totalPoints / (totalGames * 3)) * 100;
    return efficiency.toFixed(2);
  }

  static generate(matches: IMatchCreate[], teamId: number) {
    return {
      totalPoints: this.counterPoints(matches, teamId),
      totalGames: this.counterGames(matches, teamId),
      totalVictories: this.counterVictories(matches, teamId),
      totalDraws: this.counterDraws(matches, teamId),
      totalLosses: this.counterLosses(matches, teamId),
      goalsFavor: this.counterProGoals(matches, teamId),
      goalsOwn: this.counterAgainstGols(matches, teamId),
      goalsBalance: this.counterGolsBalance(matches, teamId),
      efficiency: this.counterEfficiency(matches, teamId),
    };
  }
}

export default LeaderboardCreator;
