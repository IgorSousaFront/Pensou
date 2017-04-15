@@include('components/head.php')
	<body>
		<header id="header">
			<div class="container">
				<div class="row">
					<div class="col-xs-9 col-sm-2">
						<a class="brand" href="index.php">
							<img src="img/brand.png" alt="">
						</a>
					</div>

					<div class="menu-button col-xs-3 visible-xs-inline-block">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="fa fa-bars fa-fw"></span>
						</button>
					</div>

					<div class="collapse navbar-collapse col-xs-12 col-sm-10"  id="navbar">
						<nav class="header-navbar">
							<ul class="menu">
								<li>
									<a href="quem-somos.php">Quem somos</a>
								</li>
								<li>
									<a href="equipe.php">Equipe</a>
								</li>
								<li>
									<a href="tratamentos.php">Tratamentos</a>
								</li>
								<li>
									<a href="blog.php">Blog</a>
								</li>
								<li>
									<a href="contato.php">Contato</a>
								</li>
							</ul>

							@@include('components/list-socials.php')
						</nav>
					</div>
				</div>
			</div>
			<section class="header-bar">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-sm-5 col-md-4">
							<ul class="list-tel">
								<li>
									<a href="tel:+5585987877530">
										<i class="icon-telefone"></i>
										(85) 8787-4587
									</a>
								</li>
								<li>
									<a href="tel:+6494461709">
										<i class="icon-whatsapp"></i>
										(85) 8787-4587
									</a>
								</li>
							</ul>
						</div>
						<div class="col-xs-12 col-sm-3 col-md-4">
							<form action="#">
								<div class="input-group">
									<input type="text" class="search form-control" placeholder="Pesquisar" aria-describedby="basic-addon2">
									<span class="input-group-addon search-icon" id="basic-addon2">
										<i class="icon-search"></i>
									</span>
								</div>
							</form>
						</div>
						<div class="col-xs-12 col-sm-4 buttons">
							<a href="home-odonto.php" class="btn-contrast">Odontologia</a>
							<a href="home-medicina.php" class="btn-primary">Medicina</a>
						</div>
					</div>
				</div>
			</section>
		</header>