<?php
  $customlink = ex_teampress_customlink(get_the_ID());
  global $number_excerpt;
  $image = get_post_meta( get_the_ID(), 'extp_image', true );
?>
<figure class="tpstyle-15 tppost-<?php the_ID();?>">
  <div class="tpstyle-15-author">
    <a href="<?php echo $customlink; ?>">
      <div class="custom-bg-circle" style="background-image: url(<?php echo get_the_post_thumbnail_url(get_the_ID(),'full'); ?>)"></div>
      <?php if($image!=''){?>
        <div class="custom-bg-circle second-img" style="background-image: url(<?php echo esc_url($image); ?>)"></div>
        <?php }
      ?>
    </a>
    <h3><a href="<?php echo $customlink; ?>"><?php the_title(); ?></a></h3>
    <?php $position = get_post_meta( get_the_ID(), 'extp_position', true ); 
      if($position!=''){ ?>
        <h5><?php echo $position; ?></h5>
    <?php }?>
  </div>
  <div class="tpstyle-15-info">
    <?php 
	if($number_excerpt > 0){?>
	<p><?php echo wp_trim_words(get_the_excerpt(),$number_excerpt,'...'); ?></p>
	<?php }?>
    <?php echo ex_teampress_social(get_the_ID());?>
  </div>
  <?php extp_custom_single_color(15);?>
</figure>